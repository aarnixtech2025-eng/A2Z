const sequelize = require("../config/database");
const { QueryTypes } = require("sequelize");

class BrandService {

  // =====================================
  // GET ALL BRANDS
  // =====================================

  async getAllBrands() {

    const sql = `

    SELECT

      t.term_id,
      t.name,
      t.slug,
      tt.description,
      tt.parent,
      tt.count

    FROM wpuz_terms t

    INNER JOIN wpuz_term_taxonomy tt

      ON tt.term_id=t.term_id

    WHERE

      tt.taxonomy='product_brand'

    ORDER BY

      t.name ASC

    `;

    return await sequelize.query(sql,{
      type:QueryTypes.SELECT
    });

  }

  // =====================================
  // GET BRAND BY SLUG
  // =====================================

  async getBrandBySlug(slug){

    const sql=`

    SELECT

      t.term_id,
      t.name,
      t.slug,
      tt.description,
      tt.parent,
      tt.count

    FROM wpuz_terms t

    INNER JOIN wpuz_term_taxonomy tt

      ON tt.term_id=t.term_id

    WHERE

      tt.taxonomy='product_brand'

      AND

      t.slug=:slug

    LIMIT 1

    `;

    const rows=await sequelize.query(sql,{
      replacements:{slug},
      type:QueryTypes.SELECT
    });

    return rows.length ? rows[0] : null;

  }

  // =====================================
  // BRAND TREE
  // =====================================

  async getBrandTree(){

    const brands=
      await this.getAllBrands();

    const map={};

    brands.forEach(item=>{

      map[item.term_id]={

        id:item.term_id,

        name:item.name,

        slug:item.slug,

        description:item.description,

        parent:item.parent,

        count:item.count,

        children:[]

      };

    });

    const tree=[];

    brands.forEach(item=>{

      if(item.parent && map[item.parent]){

        map[item.parent]
        .children
        .push(map[item.term_id]);

      }else{

        tree.push(map[item.term_id]);

      }

    });

    return tree;

  }

}

module.exports=new BrandService();