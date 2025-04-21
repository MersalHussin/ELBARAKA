import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  fertilizersData,
  pgrsData,
  pesticidesData,
  seedsData,
} from "../data/ProductsData";
function ProductDetails(props) {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let productType;
  let dataSource;
  if (location.pathname.startsWith("/fertilizers")) {
    productType = "fertilizers";
    dataSource = fertilizersData;
  } else if (location.pathname.startsWith("/pgr")) {
    productType = "pgrs";
    dataSource = pgrsData;
  } else if (location.pathname.startsWith("/pesticides")) {
    productType = "pesticides";
    dataSource = pesticidesData;
  } else if (location.pathname.startsWith("/seeds")) {
    productType = "seeds";
    dataSource = seedsData;
  } else {
    return <div>نوع المنتج غير معروف</div>;
  }
  const product = dataSource.find((item) => item.id === parseInt(id));
  if (!product) {
    return <div>المنتج غير موجود</div>;
  }
  return (
    <>
      <div id="products">
        <div className="product-details-page-container">
          <div className="product-details-page">
            <div className="product-details-image">
              <img src={`${product.img}`} alt={`${product.name}-image`} />
              <a
                className="product-image-link"
                target="_blank"
                href={`https://wa.me/+201068063055?text= السلام عليكم كنت عاوز أستفسر عن منتج ${product.name}`}
                rel="noreferrer"
              >
                أسأل عن المنتج
              </a>
            </div>
            <div className="product-details-text">
              <h1>{product.name}</h1>

              {/* التركيبة */}
              {product.composition && (
                <>
                  <h2 className="details-info">التركيب({product.comp}):</h2>
                  <ul>
                    {Array.isArray(product.composition)
                      ? product.composition.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      : Object.entries(product.composition).map(
                          ([key, value], index) => (
                            <li key={index}>
                              {key}: {value}
                            </li>
                          )
                        )}
                  </ul>
                </>
              )}

              {/* المميزات */}
              {product.features && (
                <>
                  <h2 className="details-info">المميزات والخصائص:</h2>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* معدلات الاستخدام (للأسمدة) */}
              {product.usageRates && (
                <>
                  <h2 className="details-info">
                    معدل الاستخدام{" "}
                    {(product.cat === "مبيدات" || product.cat === "منظمات النمو") &&
                      "طبقا لتوصيات وزارة الزراعة"}

                    {(product.name === "جراند سايز") &&
                      "عن طريق الرش الورقي"}
                    :
                  </h2>
                  {typeof product.usageRates === "string" ? (
                    <p>يضاف بمعدل: {product.usageRates}</p>
                  ) : (
                    <ul>
                      {Object.entries(product.usageRates).map(
                        ([key, value], index) => (
                          <li key={index}>
                            <span>{key || ""}</span>: {value}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </>
              )}

              {/* معدلات الاستخدام الإضافية (متداخلة) */}
              {product.usageRatesExtra && (
                <>
                  <h2 className="details-info">
                    معدلات الاستخدام حسب المحصول:
                  </h2>
                  {Object.entries(product.usageRatesExtra).map(
                    ([cropType, rates], index) => (
                      <div key={index} className="crop-usage">
                        <h3>{cropType}</h3>
                        <ul>
                          {Object.entries(rates).map(
                            ([method, value], subIndex) => (
                              <li key={subIndex}>
                                {method}: {value}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )
                  )}
                </>
              )}

              {/* معدل الزراعة (للبذور) */}
              {product.plantingRate && (
                <>
                  <h2 className="details-info">معدل الزراعة:</h2>
                  <p>{product.plantingRate}</p>
                </>
              )}
              {/* فترة ما قبل الحصاد */}
              {product.PHI && (
                <>
                  <h2 className="details-info"> فترة ماقبل الحصاد (PHI):</h2>
                  <ul>
                    <li>{product.PHI}</li>
                  </ul>
                </>
              )}
              {product.notes && (
                <>
                  <h2 className="details-info">ملحوظة:</h2>
                  <ul>
                    <li>{product.notes}</li>
                  </ul>
                </>
              )}

              {/* الخلط */}
              {product.mixing && (
                <>
                  <h2 className="details-info">الخلط:</h2>
                  <p>{product.mixing}</p>
                </>
              )}

              {/* رقم التسجيل */}
              {product.registrationNumber && (
                <>
                  <h2 className="details-info">
                    رقم التسجيل بوزارة الزراعة المصرية :{" "}
                    {product.registrationNumber}{" "}
                  </h2>
                  <p></p>
                </>
              )}

              {/* النوع */}
              {product.type && (
                <>
                  <h2 className="details-info">النوع:</h2>
                  <p>{product.type}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
