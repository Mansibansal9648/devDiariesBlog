import axios from "axios";

//---------------GET LABEL---------------------

export const getAllLabels = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/label/get-all-label"
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

//--------------GET LABEL BY NAME-------------------

export const getLabelByName = async (label_name) => {
  try {
    const response = await axios.post("http://localhost:8080/label/get-label", {
      name: label_name.name,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};


/* Create New Label */

export const createNewLabel = async (labelName)=>{
 try {
  const response =  await axios.post("http://localhost:8080/label/create-label",{
    name: labelName
  });
  return response;
 } catch (error) {
    return error.response;
 }
}
