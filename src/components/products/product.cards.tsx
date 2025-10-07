export default function CardProduct({ product, position }: { product: any, position: 'center' }) {

  const classList = 'card-body text-' + position;

  const href = `/servicios/${product.slug || product.id || ''}`;

  return (
    <div className="card card-product border mb-5 shadow-xs border-radius-lg">
      <a href={href} className="text-decoration-none text-reset">
        <div className="height-350">
          <img className="w-100 h-100 p-4 rounded-top" src={product?.Slides?.[0]?.url} alt={product?.SEO?.metaDescription || product?.Name} />
        </div>
        <div className={classList}>
          <h4 className="font-weight-bold">{product.Name}</h4>
          <p className="text-body">{product?.SEO?.metaDescription}</p>
        </div>
      </a>
    </div>
  );
}
