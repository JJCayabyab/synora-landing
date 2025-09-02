import Container from '../../components/Container'
import { motion } from 'framer-motion'
import { PartnersData } from '../../data/LandingPageData'

const Partners = () => {

    const PartnersItems = () => {
        return (
            <div className="overflow-hidden relative w-full">
                <motion.div
                    className="flex gap-12"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                    }}
                >
                    {[...PartnersData, ...PartnersData].map((partner, index) => (
                        <div key={index} className="flex justify-center items-center min-w-3xs">
                            <a href={partner.link} target="_blank">
                                <img src={partner.logo} alt={partner.name}
                                    className="h-12 md:h-14 lg:h-16  opacity-80 hover:opacity-100 transition"
                                />
                            </a>

                        </div>
                    ))}
                </motion.div>
            </div>
        );
    };

    return (
        <Container>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="font-heading text-heading-1 font-bold text-xl mb-5 text-center
                   sm:text-2xl
                   md:text-3xl
                   lg:text-4xl"
            >
                    Trusted by Leading Innovators
            </motion.h1>
            <PartnersItems />
        </Container>
    )
}

export default Partners