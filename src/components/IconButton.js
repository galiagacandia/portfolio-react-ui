const IconButton = (props) => {
  return(
    <a href={props.url} target="_blank" rel="noreferrer">
      <i className={props.iconname}></i>
    </a>
  );
}
export default IconButton;
