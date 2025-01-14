import supabase from "./supabase";

export async function apiGetFooterData() {
  const { data, error } = await supabase.from("footer").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
