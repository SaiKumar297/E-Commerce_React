import React from "react";

const Description = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-4xl px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Product</h1>
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            className="w-1/5 mx-auto mb-4"
            alt="Product"
          />
          <p className="text-lg leading-relaxed">
            The shirt was an item of clothing that only men could wear as
            underwear, until the twentieth century. Although the women's
            chemise was a closely related garment to the men's, it is the
            men's garment that became the modern shirt. In the Middle Ages, it
            was a plain, undyed garment worn next to the skin and under
            regular garments. In medieval artworks, the shirt is only visible
            (uncovered) on humble characters, such as shepherds, prisoners,
            and penitents. In the seventeenth century, men's shirts were
            allowed to show, with much the same erotic import as visible
            underwear today. In the eighteenth century, instead of underpants,
            men "relied on the long tails of shirts ... to serve the function
            of drawers. Eighteenth-century costume historian Joseph Strutt
            believed that men who did not wear shirts to bed were indecent.
            Even as late as 1879, a visible shirt with nothing over it was
            considered improper.
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
