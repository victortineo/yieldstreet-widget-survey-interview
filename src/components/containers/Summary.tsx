import { colors } from "../../constants";
import { Survey } from "../../models/survey";

export const Summary = ({ name, email, age, gender, favoriteBook, favoriteColors }: Survey) => (
  <div data-testid="summary">
    <div>
      <p><strong>Name: </strong>{name}</p>
    </div>
    <div>
      <p><strong>Email: </strong>{email}</p>
    </div>
    <p><strong>Age: </strong>{age}</p>
    <p><strong>Gender: </strong>{gender}</p>
    <p><strong>Favorite Book: </strong>{favoriteBook}</p>
    <div>
      <p><strong>Favorite Colors: </strong></p>
      {favoriteColors.map(color => <span key={color} className={`inline-block h-8 w-8 ${colors[color]}`}></span>)}
    </div>
  </div>
)