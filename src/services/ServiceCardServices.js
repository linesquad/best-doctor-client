import supabase from "./supabase";

export const getServices = async () => {
  let { data: services, error } = await supabase.from("services").select("*");
  return { services, error };
};
