import httpClient from "../../../config/httpClient.js";
import { useEffect, useState } from "react";

export default function Profile() {
 type ProfileData = {
   imageUrl: string;
   names: string;
   lastNames: string;
   email: string;
   address: string;
   phoneNumber: number;
   idNumber: string;
   accessName: string;
   accessDescription: string;
   imageFile?: File;
 };

 const [profileData, setProfileData] = useState<ProfileData>();
 const [showPopup, setShowPopup] = useState(false);

 const updateProfileInfo = async () => {
  try {
    const response = await httpClient.get("user/general/getUserInfo");
    setProfileData(response.data.data);
  } catch (error) {
  }
 }

 useEffect(() => {
  updateProfileInfo();
 },[]);

 const handleImageClick = () => {
  setShowPopup(true);
 };

 const handleClosePopup = () => {
  setShowPopup(false);
 };

 const handleUpdateProfile = async () => {
  try {
    const formData = new FormData();
    if (profileData?.imageFile) {
      formData.append("image", profileData.imageFile);
    }
  
  const response = await httpClient.post("user/general/updateProfilePicture", formData);
  handleClosePopup(); // Cerrar el popup después de subir la imagen
  } catch (error) {
  alert("Hubo un error al subir la imagen. Por favor, inténtalo de nuevo."); // Mostrar un mensaje de error al usuario
  }
 };
 
 const handleImageChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    if (profileData) {
      setProfileData({...profileData, imageFile: file});
    }
  };
  reader.readAsDataURL(file);
 };

return (
  <div className="max-w-5xl mx-auto my-12 bg-white rounded-3xl shadow-xl overflow-hidden">
  <div className="relative">
    <div className="relative p-6 flex items-center">
      <img className="h-32 w-32 rounded-full border-4 border-white shadow-xl" src={profileData?.imageUrl} alt="Profile" onClick={handleImageClick} />
        {showPopup && (
          <div className="absolute z-10 bg-white p-4 rounded shadow-lg">
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <label htmlFor="profileImage" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer">
              Actualizar foto de perfil
            </label>
            {profileData?.imageFile && (
              <button onClick={handleUpdateProfile} className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 mt-2">
                Guardar imagen de perfil
              </button>
            )}
            <button onClick={handleClosePopup}>Ver foto de perfil</button>
          </div>
        )}      
      <div className="ml-6">
        <h2 className="text-4xl font-bold text-white">{profileData?.names}</h2>
        <p className="text-lg text-indigo-200">{profileData?.email}</p>
      </div>
    </div>
  </div>
  <div className="p-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <div className="mb-4">
          <label className="text-gray-700 font-semibold">Nombre</label>
          <p className="text-gray-600">{profileData?.names}</p>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-semibold">Correo Electrónico</label>
          <p className="text-gray-600">{profileData?.email}</p>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-semibold">Teléfono</label>
          <p className="text-gray-600">{profileData?.phoneNumber}</p>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-semibold">Dirección</label>
          <p className="text-gray-600">{profileData?.address}</p>
        </div>
        <div>
          <div className="flex flex-wrap">
            <span className="m-1 bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{profileData?.accessName}</span>
            <span className="m-1 bg-green-200 text-green-800 text-sm font-medium px-3 py-1 rounded-full">{profileData?.accessDescription}</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sobre mí</h3>
        <p className="text-md text-gray-600">
          Breve descripción o información adicional sobre el usuario. Por ejemplo, sus hobbies, logros profesionales, o cualquier detalle que quiera destacar.
        </p>
      </div>
    </div>
    <div className="flex justify-between mt-10">
      <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-lg transition duration-200 ease-in-out">
        Editar Perfil
      </button>
      <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded-lg transition duration-200 ease-in-out">
        Eliminar Perfil
      </button>
    </div>
  </div>
  </div>
 );
}