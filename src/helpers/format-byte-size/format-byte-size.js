const formatByteSize = ({ bytes }) => {

    const is_bytes = bytes < 1024;
    const is_kilobytes = bytes < 1048576;
    const is_megabytes = bytes < 1073741824;
    const is_gigabyte = bytes / 1073741824;

    if(is_bytes) return bytes + " bytes"

    if(is_kilobytes) return (bytes / 1024).toFixed(3) + " KiB";

    if(is_megabytes) return(bytes / 1048576).toFixed(3) + " MiB";

    if(is_gigabyte) return(bytes / 1073741824).toFixed(3) + " GiB";

    return "0 bytes";
};
module.exports={formatByteSize};