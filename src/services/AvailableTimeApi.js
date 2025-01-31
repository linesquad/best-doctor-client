import supabase from "./supabase";

export const getAvailableTime = async () => {
  const { data, error } = await supabase
    .from("doctor_availability")
    .select("*");
    if (error) throw error.message;
  return data;
};
