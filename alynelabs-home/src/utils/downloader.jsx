
const handleDownload = (path, rename) => () => {
  const link = document.createElement("a");
  link.href = path;          
  link.download = rename;   
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default handleDownload