export const Footer = () => {
    return (
        <footer className="bg-thistle mt-[9rem] h-[25rem] py-[6rem] flex flex-col">
            <section className="flex justify-evenly items-center">
                <h1 className="font-rozha_one text-[3rem] text-rebecca_purple">Youth</h1>
                <article className="flex gap-[6.5rem] uppercase text-[1.4rem]">
                    <h2>Address</h2>
                    <h2>Contacts</h2>
                </article>
            </section>
            <hr className="left-[20rem] border-[0.1rem] w-[79rem] border-wisteria relative" />
            <section className="flex justify-end px-[20.5rem] gap-[4rem] mt-7">
                <article className="text-purple-800 text-opacity-70">
                    <address className="not-italic">Michigan <br /> 143 O Conner Street</address>
                </article>
                <article className="text-purple-800 text-opacity-70">
                    <p>228-596-3089</p>
                    <p>y9hvg4m6akm@temporary-mail.net</p>
                </article>
            </section>
        </footer>
    )
}
