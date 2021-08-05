import "../scss/WrapperName.scss";
const WrapperName = (prop) => {
  return <div className={`wrappername ${prop.className}`}>{prop.children}</div>;
};

export default WrapperName;
