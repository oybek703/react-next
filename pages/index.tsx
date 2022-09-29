import type {NextPage} from 'next'
import HTag from '../components/HTag'
import Button from '../components/Button'
import PTag from '../components/PTag'

const Home: NextPage = () => {
    return (
        <>
            <HTag tag="h3">This is HTag children</HTag>
            <Button arrow="right" appereance="primary">Click</Button>
            <Button arrow="down" appereance="ghost">Click</Button>
            <PTag>
                Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки,
                которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами.
                Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
            </PTag>
        </>
    )
}

export default Home
