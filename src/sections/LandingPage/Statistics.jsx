import Container from "../../components/Container"
import { motion } from "framer-motion"
import { StatisticsData } from "../../data/LandingPageData"

const Statistics = () => {

    const ShowStats = () => {
        return (
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {StatisticsData.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="bg-indigo-50  dark:bg-[#1e293b] rounded-2xl shadow-md p-6 text-center backdrop-blur-md"
                    >
                        <h2 className="text-3xl font-heading font-bold bg-gradient-to-r text-gradient">{stat.number}</h2>
                        <p className="text-heading-1 font-body dark:text-gray-300">{stat.title}</p>
                    </motion.div>
                ))}
            </div>
        )
    }

    return (
        <Container>
            <ShowStats />
        </Container>
    )
}

export default Statistics