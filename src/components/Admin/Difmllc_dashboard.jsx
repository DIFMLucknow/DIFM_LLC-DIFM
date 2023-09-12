import React, { useState } from "react";
import { del, log, exportss } from "../../assets";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";

const Difmllc_dashboard = () => {
  const navigate = useNavigate();
  const headers = [
    { label: "Sr.no", key: "sno" },
    { label: "Date", key: "date" },
    { label: "email", key: "email" },
  ];
  const [subscribed_users, setSubcribed_users] = useState([]);
  const allSubscriber = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "subscribed_users"));
      const newData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const createdAtDate = data.date?.toDate ? data.date.toDate() : null;

        return {
          id: doc.id,
          ...data,
          createdAtDate: createdAtDate
            ? createdAtDate.toLocaleDateString()
            : null,
        };
      });

      setSubcribed_users(newData);
      console.log(subscribed_users);
    } catch (error) {
      // Handle any errors that occur during data fetching
      console.error("Error fetching subscribed users:", error);
    }
  };

  // delete the subscribers
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Subscriber ?"
    );
    if (confirmDelete) {
      await deleteDoc(doc(db, "subscribed_users", id));
      // alert(`Deleting the user ID: ${id}`);
    } else {
      // User canceled the deletion
      alert("Deletion canceled.");
    }
  };
  //  useEffect(()=>{
  allSubscriber();
  //  })

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        alert("Signed out successfully");
        // Reload the page to update the UI
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <h1 className="text-white text-xl mb-2 mt-6">Subscribers</h1>
      <div class="overflow-x-auto mx-2">
        <table class="min-w-full   rounded-lg ">
          <thead>
            <tr>
              <th class="py-2 px-4 bg-cyan-300 rounded-tl-lg">Sr.</th>
              <th class="py-2 px-4 bg-cyan-300">Date</th>
              <th class="py-2 px-4 bg-cyan-300">Email</th>
              <th class="py-2 px-4 bg-cyan-300 rounded-tr-lg">Action</th>
            </tr>
          </thead>
          <tbody className="bg-discount-gradient text-dimWhite text-center">
            {subscribed_users.map((element, id) => {
              return (
                <>
                  <tr>
                    <td class="py-2 px-4 border-b rounded-bl-lg">
                      {(id + 1).toString().padStart(2, "0")}
                    </td>
                    <td class="py-2 px-4 border-b rounded-bl-lg">
                      {element.createdAtDate}
                    </td>
                    <td class="py-2 px-4 border-b rounded-bl-lg">
                      {element.email}
                    </td>
                    <td
                      class="py-2 px-4 border-b"
                      onClick={() => {
                        handleDelete(element.id);
                      }}
                    >
                      <img src={del} alt="del" className="w-[30px] mx-auto" />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className=" bg-discount-gradient px-4 py-8 rounded-b-lg">
          <div className="grid grid-cols-2">
            <CSVLink
              data={subscribed_users.map((user,index) => ({
                sno: index + 1,
                email: user.email,
                date: user.createdAtDate,
              }))}
              headers={headers}
              filename="user_data.csv"
            >
                                     {" "}
              <button
                type="submit"
                id="sendemail"
                class="block w-[120px] rounded-md bg-blue-gradient px-3.5 py-1.5 h-[40px] text-center text-md font-semibold text-dimwhite shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 flex"
              >
                <img src={log} alt="del" className="w-[20px] " /> Export All
              </button>
                                   {" "}
            </CSVLink>

            <button
              type="submit"
              id="sendemail"
              class="block w-[100px] ml-auto rounded-md bg-blue-gradient px-3.5 py-1.5 h-[40px] text-center text-md font-semibold text-dimwhite shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 flex"
              onClick={() => handleLogout()}
            >
              Logout{" "}
              <img src={exportss} alt="del" className="w-[20px] ml-1 py-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Difmllc_dashboard;
