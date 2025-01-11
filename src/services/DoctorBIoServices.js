import supabase from "./supabase";
// getting doctor bio content
export async function apiGetDoctorBio() {
  const { data, error } = await supabase.from("doctor_name").select("*");
  if (error) throw new Error(error.message);
  return data;
}
//getting doctor bio image
export async function apiGetDoctorBioImage() {
  const { data, error } = await supabase.from("personal_pictures").select("*");
  if (error) throw new Error(error.message);
  return data;
}
