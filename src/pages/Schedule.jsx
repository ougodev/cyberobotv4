import { motion } from 'framer-motion'

const Schedule = () => {
  const scheduleItems = [
    {
      time: '7:00',
      activity: 'ACCUEIL',
      description: 'Welcome and check-in for all participants',
      icon: 'fa-door-open',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      time: '8:00 - 9:30',
      activity: 'HOMOLOGATION JUNIOR ET SUIVEUR',
      description: 'Technical inspection for Junior and Line Follower robots',
      icon: 'fa-clipboard-check',
      color: 'from-purple-500 to-pink-500'
    },
    {
      time: '9:30 - 10:30',
      activity: 'LANCEMENT JUNIOR ET SUIVEUR',
      description: 'Competition rounds for Junior and Line Follower challenges',
      icon: 'fa-rocket',
      color: 'from-green-500 to-emerald-500'
    },
    {
      time: '10:30 - 11:00',
      activity: 'PAUSE CAFÉ',
      description: 'Coffee break and networking opportunity',
      icon: 'fa-coffee',
      color: 'from-amber-500 to-orange-500'
    },
    {
      time: '11:00 - 12:30',
      activity: 'HOMOLOGATION TOUT TERRAIN',
      description: 'Technical inspection for All Terrain robots',
      icon: 'fa-clipboard-check',
      color: 'from-purple-500 to-pink-500'
    },
    {
      time: '12:30',
      activity: 'REMISE DES PRIX JUNIOR & SUIVEUR',
      description: 'Awards ceremony for Junior and Line Follower challenges',
      icon: 'fa-trophy',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      time: '13:00 - 14:00',
      activity: 'DÉJEUNER',
      description: 'Lunch break for all participants',
      icon: 'fa-utensils',
      color: 'from-red-500 to-rose-500'
    },
    {
      time: '14:00',
      activity: 'LANCEMENT TOUT TERRAIN',
      description: 'Competition rounds for All Terrain challenge',
      icon: 'fa-mountain',
      color: 'from-green-500 to-teal-500'
    },
    {
      time: '17:00',
      activity: 'REMISE DES PRIX TOUT TERRAIN',
      description: 'Awards ceremony for All Terrain challenge and closing',
      icon: 'fa-trophy',
      color: 'from-yellow-500 to-amber-500'
    }
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-cyber-primary/20 border border-cyber-primary/40 rounded-full text-cyber-primary font-orbitron font-bold text-sm tracking-wider">
                NOVEMBER 23, 2025
              </span>
            </div>
            <h1 className="section-title mb-6">Event Schedule</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-exo leading-relaxed">
              A full day of robotics competition, innovation, and celebration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-cyber-dark relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-primary via-cyber-accent to-cyber-primary hidden lg:block"></div>

            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="card-cyber group">
                      {/* Time Badge */}
                      <div className="inline-block mb-4">
                        <span className={`px-4 py-2 bg-gradient-to-r ${item.color} text-white font-orbitron font-bold text-sm rounded-lg shadow-lg`}>
                          {item.time}
                        </span>
                      </div>

                      {/* Activity */}
                      <h3 className="text-xl font-orbitron font-bold mb-2 gradient-text">
                        {item.activity}
                      </h3>
                      <p className="text-gray-400 font-exo">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon (Center) */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl shadow-cyber-primary/30 border-4 border-cyber-dark transform group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`fas ${item.icon} text-white text-xl`}></i>
                    </div>
                  </div>

                  {/* Spacer for alternate layout */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </div>

                {/* Mobile Icon */}
                <div className="lg:hidden flex items-center space-x-4 mt-4 mb-8">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <i className={`fas ${item.icon} text-white`}></i>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-cyber-primary to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-orbitron font-bold mb-8 gradient-text text-center">
              Important Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cyber-light/50 backdrop-blur-lg border border-cyber-primary/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <i className="fas fa-clock text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-bold mb-2 text-cyber-primary">
                      Arrival Time
                    </h3>
                    <p className="text-gray-400 font-exo">
                      Please arrive by 7:00 AM for check-in and preparation
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-light/50 backdrop-blur-lg border border-cyber-primary/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <i className="fas fa-tools text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-bold mb-2 text-cyber-primary">
                      Equipment
                    </h3>
                    <p className="text-gray-400 font-exo">
                      Bring all necessary tools and backup parts for your robot
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-light/50 backdrop-blur-lg border border-cyber-primary/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <i className="fas fa-id-card text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-bold mb-2 text-cyber-primary">
                      Registration
                    </h3>
                    <p className="text-gray-400 font-exo">
                      Have your registration confirmation and ID ready
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-light/50 backdrop-blur-lg border border-cyber-primary/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <i className="fas fa-book text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-bold mb-2 text-cyber-primary">
                      Specifications
                    </h3>
                    <p className="text-gray-400 font-exo">
                      Review the challenge specifications before the event
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-orbitron font-black mb-6 text-white">
              Mark Your Calendar
            </h2>
            <p className="text-xl text-white/90 font-exo mb-8 max-w-2xl mx-auto">
              November 23, 2025 at ISET Nabeul - Don't miss this incredible robotics event
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                className="px-10 py-4 bg-white text-cyber-primary font-orbitron font-bold rounded-lg transform transition-all duration-300 hover:scale-105"
              >
                Register Now
              </a>
              <a
                href="/program/venue"
                className="px-10 py-4 border-2 border-white text-white font-orbitron font-bold rounded-lg transform transition-all duration-300 hover:bg-white hover:text-cyber-primary hover:scale-105"
              >
                View Venue
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Schedule
