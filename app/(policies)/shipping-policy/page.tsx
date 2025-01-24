const ShippingPolicy = () => {

    return (
        <div className="flex flex-col gap-6 p-6 text-left max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-center">Shipping Policy</h1>
    
          <p className="text-base leading-relaxed">
          If you are unsure of your delivery address being in CBD city or surrounding areas, please check with us via email: mizoujewelry@gmail.com
          </p>
    
          <div className="bg-yellow-100 p-4 border-l-4 border-yellow-500">
            <h2 className="font-semibold">PLEASE NOTE:</h2>
            <p className="mt-2 text-sm leading-relaxed">
            The standard delivery fee is R70 for major city areas and takes 2-3 working days to processed and thereafter 1-3 working days for delivery. For international shipping, please speak to us via email: mizoujewelry@gmail.com
            </p>
            <p className="mt-2 text-sm leading-relaxed">
            Outlying areas (outside of major cities) takes 2-3 working days to processed and may take up to 7 working days to reach you and has a base fee of R125. Public holidays and weekends affect this delivery time.
            </p>
          </div>
    
          <p className="text-base leading-relaxed">
          If you have placed an order with us and would like to track your order, after 2 working days, please have a look at your  mails and then your spam. You should find an email from us that contains your tracking number. Copy that number and then click on it to be taken to the couriers website. Paste, and you should have an update. 
          </p>
    
          <div className="bg-blue-100 p-4 border-l-4 border-blue-500">
            <h2 className="font-semibold">Jewelry Care:</h2>
            <p className="mt-2 text-sm leading-relaxed">
            If you would like to chat to courier about your package, please contact them directly. Have your tracking number ready
            </p>
          </div>
    
          
        </div>
      );
    };

export default ShippingPolicy