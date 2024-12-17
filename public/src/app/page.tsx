import PageBody from "@/app/components/pagebody/pagebody";
import PageTitle from "@/app/components/pagetitle/pagetitle";
import NewsBox from "@/app/components/newsbox/newsbox";
import Footer from "@/app/components/footer/footer";

const newsItems = [
    {
        title: "Prezenta CNS La Concursul Interjudețean de Matematică și Informatică \"Grigore Moisil\" ",
        date: "December 16, 2024",
        image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80",
        link: "/management-documente",
    },
    {
        title: "Breaking News 2",
        date: "December 15, 2024",
        image: "https://via.placeholder.com/450x255",
        link: "/management-documente",
    },
    {
        title: "Breaking News 3",
        date: "December 14, 2024",
        image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80",
        link: "/",
    },
    {
        title: "Breaking News 3",
        date: "December 14, 2024",
        image: "https://via.placeholder.com/450x255",
        link: "/",
    },
    {
        title: "Breaking News 3",
        date: "December 14, 2024",
        image: "https://via.placeholder.com/450x255",
        link: "/",
    },
    {
        title: "Breaking News 3",
        date: "December 14, 2024",
        image: "https://via.placeholder.com/450x255",
        link: "/",
    },
    {
        title: "Breaking News 3",
        date: "December 14, 2024",
        image: "https://via.placeholder.com/450x255",
        link: "/",
    },

];
export default function Home() {
  return (
      <div>

            <PageBody>
                <div className="bg-[url('/websiteUI/schita-liceu-blurred.png')] bg-cover bg-right w-full flex h-[500] rounded-3xl mt-32 shadow-2xl border-solid border lg:bg-[url('/websiteUI/schita-liceu.png')]">
                    <div className="w-full self-center justify-center text-center lg:text-left lg:ml-16 lg:w-[470px]">
                        <h1 className="text-3xl font-bold md:text-5xl animate-fadeUp">
                            COLEGIUL NAȚIONAL
                        </h1>
                        <h1 className="text-7xl font-bold text-indigo-900 -mt-2 md:text-8xl animate-fadeUp">
                            SILVANIA
                        </h1>
                        <h1 className="text-lg font-bold -mt-1 md:text-2xl animate-fadeUp">
                            Performanță și excelență prin integrarea tradiției în modernitate!
                        </h1>
                    </div>
                </div>

                <PageTitle text="ANUNȚURI"></PageTitle>

                <NewsBox newsItems={newsItems} />

                <Footer></Footer>

               </PageBody>



      </div>
  );
}
