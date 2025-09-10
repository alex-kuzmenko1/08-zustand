
import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./create.module.css";

export const metadata = {
  title: "Create note — NoteHub",
  description: "Створіть нову нотатку в NoteHub",
  openGraph: {
    title: "Create note — NoteHub",
    description: "Створіть нову нотатку в NoteHub",
    url: "https://07-routing-nextjs-silk-five.vercel.app/notes/action/create",
    images: [{ url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg" }],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
