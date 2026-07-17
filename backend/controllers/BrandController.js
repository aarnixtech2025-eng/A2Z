const BrandService=require("../services/BrandService");

class BrandController{

  async getAllBrands(req,res,next){

    try{

      const brands=
      await BrandService.getAllBrands();

      res.json({
        success:true,
        count:brands.length,
        brands
      });

    }catch(error){
      next(error);
    }

  }

  async getBrandBySlug(req,res,next){

    try{

      const brand=
      await BrandService.getBrandBySlug(
        req.params.slug
      );

      if(!brand){

        return res.status(404).json({
          success:false,
          message:"Brand not found"
        });

      }

      res.json({
        success:true,
        brand
      });

    }catch(error){
      next(error);
    }

  }

  async getBrandTree(req,res,next){

    try{

      const tree=
      await BrandService.getBrandTree();

      res.json({
        success:true,
        brands:tree
      });

    }catch(error){
      next(error);
    }

  }

}

module.exports=new BrandController();