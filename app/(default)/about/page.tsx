export default function About() {

    return (
        <section className="relative content-none">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 md:pt-40">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto">
                        <h1 className="h1">About Me</h1>
                        <p>
                            I was born and raised in Delhi. I learned German at the Goethe-Institut in New Delhi. I am patient and reliable. Currently, I live in Bangalore, and it has been a great experience making friends with people from different cultures. I have also learned the local language, which has helped me understand the challenges of learning a new language.
                        </p>
                        <h2 className="h3 mt-10 mb-2">My lessons and teaching style</h2>
                        <p>
                            I offer structured lessons based on textbooks, as well as conversational sessions. Homework is optional, according to your preferences. During our classes, we will primarily focus on conversation, while also delving into German grammar to enhance your understanding. I will assist you in expanding your vocabulary. If you have specific ideas about what you would like to learn in our lessons, I am flexible and can tailor the content to your preferences.
                        </p>
                        <h3 className="h3 mt-10 mb-2">My teaching material</h3>
                        <ul className={'list-disc pl-4'}>
                            <li>Audio files</li>
                            <li>PDF file</li>
                            <li>Text Documents</li>
                            <li>Image files</li>
                            <li>Articles and news</li>
                            <li>Video files</li>
                            <li>Homework Assignments</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
