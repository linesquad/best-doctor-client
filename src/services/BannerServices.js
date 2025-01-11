import supabase from "./supabase";

export const apiGetBanner = async () => {
  let { data: description, error } = await supabase.from("banner").select("*");

  return { description, error };
};
