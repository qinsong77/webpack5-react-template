import { useParams } from 'react-router-dom'

import { useBearStore } from '@/stores'

export const List = () => {
  // todo 这里increasePopulation应该也是显示黄色，是const zustand 会默认将所有的函数保持同一引用，但用combine: https://docs.pmnd.rs/zustand/guides/typescript#basic-usage就行，自定义类型不行
  const { bears, increasePopulation } = useBearStore()
  const { listId } = useParams()
  return (
    <div>
      this is article List, id: {listId}
      <p>bear: {bears}</p>
      <button
        onClick={() => increasePopulation(10)}
        className="btn-blue"
      >
        increase
      </button>
    </div>
  )
}
