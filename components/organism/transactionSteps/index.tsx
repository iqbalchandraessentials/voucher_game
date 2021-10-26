import StepItem from "../../molecules/stepItem";

export default function TransactionStep() {
    return (
        <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
            <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">It’s Really That<br/> Easy to Win the Game
            </h2>
            <div className="row gap-lg-0 gap-4" data-aos="fade-up">
               <StepItem icon={'step-1'} title={'1. Start'} description={`Pilih salah satu game yang ingin kamu top up`}/>
               <StepItem icon={'step-2'} title={'2. Fill-Up'} description={`Top up sesuai dengan<br> nominal yang sudah tersedia`}/>
               <StepItem icon={'step-3'} title={'3. Be a Winner'} description={`Siap digunakan untuk<br> improve permainan kamu`}/>
            </div>
        </div>
    </section>
    )
}
