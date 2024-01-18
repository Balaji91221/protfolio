import { toast } from 'react-toastify';
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [desc, setDesc] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (name.length > 0 && subject.length >= 8 && desc.length >= 8) {
            // Check if the user is authenticated (replace this with your authentication logic)
            const isAuthenticated = true; // Replace with your authentication logic

            if (isAuthenticated) {
                // Replace the Supabase-related code with your data storage logic
                // const { error } = await supabase.from('Feedback').insert({ 
                //     email: auth.user.email, 
                //     name: name,
                //     subject: subject,
                //     message: desc 
                // });

                // Placeholder data for demonstration
                const feedbackData = {
                    email: "user@example.com", // Replace with the authenticated user's email or identifier
                    name: name,
                    subject: subject,
                    message: desc
                };

                // Replace the error handling logic as needed
                const error = false; // Replace with your error handling logic

                if (error) {
                    toast.error("Failed to send Feedback");
                    console.log(error);
                } else {
                    toast.success("Feedback sent successfully");
                    setName('');
                    setSubject('');
                    setDesc('');
                }
            } else {
                toast.error("User not authenticated"); // Handle unauthenticated user
            }
        } else {
            toast.error("Minimum 8 words required for Subject and Message");
        }
    }

    return (
        <div>
            <section className="pt-8 lg:pt-16">
                <div className="py-8 lg:py-16 px-8 mx-auto max-w-screen-md glass rounded-lg shadow-lg">
                    <div className="text-center">
                        <h1 className="flex flex-col font-black leading-none text-Balaji-700 uppercase font-bebas-neue sm:text-8xl dark:text-Balaji-200">
                            <span className="text-3xl sm:text-5xl pb-8">GET IN TOUCH</span>
                        </h1>
                    </div>
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="relative">
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-Balaji-900 dark:text-Balaji-300">Full Name</label>
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" className="block p-4 w-full text-sm text-Balaji-900 bg-Balaji-50 rounded-lg border border-Balaji-300 shadow-sm focus:ring-Balaji-500 focus:border-Balaji-500 dark:bg-Balaji-700 dark:border-Balaji-600 dark:placeholder-Balaji-400 dark:text-white dark:focus:ring-Balaji-500 dark:focus:border-Balaji-500 dark:shadow-sm-light" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-Balaji-900 dark:text-Balaji-300">Subject</label>
                            <input minLength={8} onChange={(e) => setSubject(e.target.value)} value={subject} type="text" id="subject" className="block p-3 w-full text-sm text-Balaji-900 bg-Balaji-50 rounded-lg border border-Balaji-300 shadow-sm focus:ring-Balaji-500 focus:border-Balaji-500 dark:bg-Balaji-700 dark:border-Balaji-600 dark:placeholder-Balaji-400 dark:text-white dark:focus:ring-Balaji-500 dark:focus:border-Balaji-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-Balaji-900 dark:text-Balaji-400">Your message</label>
                            <textarea minLength={8} onChange={(e) => setDesc(e.target.value)} id="message" rows={6} className="block p-2.5 w-full text-sm text-Balaji-900 bg-Balaji-50 rounded-lg shadow-sm border border-Balaji-300 focus:ring-Balaji-500 focus:border-Balaji-500 dark:bg-Balaji-700 dark:border-Balaji-600 dark:placeholder-Balaji-400 dark:text-white dark:focus:ring-Balaji-500 dark:focus:border-Balaji-500" placeholder="Leave a comment..." defaultValue={desc} />
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-Balaji-700 sm:w-fit hover:bg-Balaji-800 focus:ring-4 focus:outline-none focus:ring-Balaji-300 dark:bg-Balaji-600 dark:hover:bg-Balaji-700 dark:focus:ring-Balaji-800">Send message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Form;
