const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dnfhrbgld/upload';

export const uploadFileToCloudinary = async (file, absoluteRoute) => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('api_key', '248711538583753');
  formData.append('timestamp', '1684162380');
  formData.append('upload_preset', 'react-ingresos-reingresos');
  formData.append('folder', absoluteRoute);
  formData.append('resource_type', 'auto');

  const requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow',
  };

  return fetch(cloudinaryURL, requestOptions)
    .then((response) => response.text())
    .then((response) => JSON.parse(response))
    .catch((error) => console.log('error', error));
};
