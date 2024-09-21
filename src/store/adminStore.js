import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

const useAdminStore = create((set) => ({
  adminEmail: "himanshi@gmail.com",
  adminPassword: "654321",
  isAdmin: false,
  adminData: null,
  setIsAdmin: (value) => set({ isAdmin: value }),

  // adminLogin: async (email, password, navigate) => {
  //   try {
  //     const response = await axios.post(
  //       "https://learnify-backend-wmjk.onrender.com/api/admin/login",
  //       {
  //         email,
  //         password,
  //       },
  //       { withCredentials: true } 
  //     );
  //     set({ isAdmin: true, adminData: response.data });
  //     toast.success("Admin login successful!");

  //     setTimeout(() => {
  //       navigate("/adminhome");
  //     }, 2000);
  //   } catch (error) {
  //     toast.error("Admin login failed!");
  //     console.error("Error during admin login:", error);
  //   }
  // },

  getAdmin: async () => {
    try {
      const response = await axios.post(
        "https://learnify-backend-wmjk.onrender.com/api/admin/getAdmin",{},
        {
          withCredentials: true,
        }
      );
        console.log(response);
      set({ adminData: response.data, isAdmin: true });
    } catch (error) {
  
      console.error("Error fetching admin info:", error);
    }
  },
}));

export default useAdminStore;
