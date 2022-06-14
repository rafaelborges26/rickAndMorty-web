import { ICard } from './interfaces'
import { CardContainer, CardInfo, ImageCard, Circle, Status, Apparition } from './styles'

export const Card = ({ name, image, status, episodes, variations }: ICard) => {
    return (
        <CardContainer  >
          
        <ImageCard src={image}  />
          
        <CardInfo >
          <h3>{name}</h3>
          <Status>
          <Circle status={status} />
          <span>{status}</span>
          </Status>
          <Apparition>
            <p>
            Primeira aparição:
            </p>

            <span>mock</span>
          </Apparition>

          <Apparition>
            <p>
            Ultima aparição:
            </p>

            <span>mock</span>
          </Apparition>

        </CardInfo>
      </CardContainer>
    )
}