import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebaseConfig";

export default function FinanceButtons() {
  const [formData, setFormData] = useState({
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = (e) => {
    if (!formData.image) {
      alert("Please choose an image");
      return;
    }
//Uploading it to storage, in the images folder. The name of the file will be the current date
    const storageRef = ref(storage, `/images/${Date.now()}`);


  const uploadImage = uploadBytesResumable(storageRef, formData.image);

  uploadImage.on(
    "state_changed",
    (snapshot) => {
      const progressPrecent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progressPrecent);
    },
    (err) => {
      console.log(err);
    },

    () => {
      setFormData({
        title: "",
        description: "",
        image: "",
      });

      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        const recieptRef = collection(db, "Reciepts");
        addDoc(recieptRef, {
          image: url,
          createdAt: Timestamp.now().toDate(),
        })
          .then(() => {
            alert("Reciept uploaded");
            setProgress(0);
          })
          .catch((err) => {
            alert("Error occured");
          });
      });
    }
  );

};
  return (
    <div>
      <button className="finance-button">Pay kitchen tax</button>

      {/* Hiding the file input under the "Add receipt" button */}
      <input
        type="file"
        name="image"
        accept="image/*"
        id="fileUpload"
        capture="camera"
        onChange={(e) => handleImageChange(e)}
      />

{progress === 0? null :(
      <div className="progress">
        <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
    </div>
)}

      <button
        className="finance-button"
        id="btn"
        value="Add receipt"
        onClick={handlePublish}
      >
        Add receipt
      </button>
    </div>
  );
}
