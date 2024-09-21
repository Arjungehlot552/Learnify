import {create} from "zustand"
import axios from "axios"

const useUserStore = create((set) =>({
    user:null,
    setUser:(user) => set({user}),
    fetchUser: async()=>{
        try {
            const res = await axios.post("https://learnify-backend-wmjk.onrender.com/api/student/getStudentUser",{},{withCredentials:true});
            console.log(res);
            set({user:res.data.data})
        } catch (error) {
            console.error('Failed to fetch user:', error);
        }
    },
}));

export default useUserStore 