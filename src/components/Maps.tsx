import React from "react";
import  {  GoogleMap ,  useJsApiLoader  }  from  '@react-google-maps/api' ; 

export interface MapsProps{}

const Maps = () => {
  const  { isLoaded }  =  useJsApiLoader ( { 
    id : 'google-map-script' , 
    googleMapsApiKey :
       "AIzaSyCXaKZNaoXpDo9nDp1kg6t9e_HTl49JevE" 
  });
  return (
      <div className="flex h-87">
      {
          isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width: "100%", height:"100%"}}
              center={{
                  lat:-5.096584426972245,
                  lng:-42.78563383600702,
              }
              }
              zoom={12}
             /// onLoad={onLoad} até agr não usados
            ///  onUnmount={onUnmount}
            ></GoogleMap>
        ) : (  
          <></>
        )}
    </div>
  );

};

export default Maps;

