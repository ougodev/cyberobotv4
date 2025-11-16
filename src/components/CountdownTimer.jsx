import { useState, useEffect } from 'react'

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="bg-cyber-light/50 backdrop-blur-lg border-2 border-cyber-primary/40 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[112px] cyber-glow">
          <span className="text-3xl md:text-5xl font-orbitron font-black gradient-text block text-center">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="text-xs md:text-sm text-gray-400 font-exo mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  )

  return (
    <div className="inline-block">
      <h3 className="text-xl md:text-2xl font-orbitron font-bold text-center mb-6 text-cyber-primary">
        Event Starts In
      </h3>
      <div className="flex justify-center gap-3 md:gap-6">
        <TimeBlock value={timeLeft.days} label="Days" />
        <div className="text-cyber-primary text-4xl font-bold self-center mb-6">:</div>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <div className="text-cyber-primary text-4xl font-bold self-center mb-6">:</div>
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <div className="text-cyber-primary text-4xl font-bold self-center mb-6">:</div>
        <TimeBlock value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  )
}

export default CountdownTimer
