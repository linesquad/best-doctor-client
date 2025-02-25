import supabase from "./supabase";


export async function apiGetBookings() {
    const { data, error } = await supabase.from("booking").select("*");
    if (error) {
      throw error;
    }
    return data;
  }

  export const getBookingById = async (id) => {
    let { data, error } = await supabase
      .from("booking")
      .select("*")
      .eq("id", id)
      .single();
  
    return { data, error };
  };