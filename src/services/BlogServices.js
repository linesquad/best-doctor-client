import supabase from "./supabase";

export async function apiGetBlogHero() {
  const { data, error } = await supabase.from("blog_pictures").select("*");
  if (error) throw error;
  return data;
}
export const getBlogId = async (id) => {
  let { data, error } = await supabase
    .from("doctor_blog")
    .select("*")
    .eq("id", id)
    .single();
  return { blog: data, error };
};

export const getBlog = async () => {
  let { data, error } = await supabase.from("doctor_blog").select("*");
  return { blog: data, error };
};

export async function apiBlogPagination({ start, end }) {
  const { data, error } = await supabase
    .from("doctor_blog")
    .select("*")
    .range(start, end);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
