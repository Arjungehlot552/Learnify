import { create } from "zustand";
import axios from "axios";

const useMentorStore = create((set) => ({
  mentor: null,
  setMentor: (mentor) => set({ mentor }),
  fetchMentor: async () => {
    try {
      const res = await axios.post(
        "https://learnify-backend-wmjk.onrender.com/api/mentor/getMentorUser",
        {},
        { withCredentials: true }
      );
      console.log(res);
      set({ mentor: res.data.data });
    } catch (error) {
      console.error("Failed to fetch mentor:", error);
    }
  },
}));

export default useMentorStore;
