import profilePic from '~/assets/images/me.jpeg'

interface ImageProps {
  index: number
}

export function Image({ index }: ImageProps) {
  return (
    <div key={index} className="flex">
      <span className="text-gray-600 w-8 text-right mr-4 select-none">{index + 1}</span>
      <img
        className="w-32 rounded-full ring-2 ring-violet-500 ring-offset-2 dark:ring-cyan-300 dark:ring-offset-cyan-800"
        src={profilePic}
        alt="It's me and a big toy bear!"
      />
    </div>
  )
}
