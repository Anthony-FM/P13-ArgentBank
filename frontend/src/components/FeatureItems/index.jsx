import './index.css'


export default function FeatureItems({img, alt, title, txt}){
    return <div className="feature-item">
    <img
      src={img}
      alt={alt}
      className="feature-icon"
    />
    <h3 className="feature-item-title">{title}</h3>
    <p>
      {txt}
    </p>
  </div>
}