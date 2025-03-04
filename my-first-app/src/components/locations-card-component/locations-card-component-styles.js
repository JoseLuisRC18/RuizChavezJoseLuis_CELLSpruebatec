import { css } from "lit";

export const Styles = css`
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  margin: 16px auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.card__img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card__title {
  font-size: 1.5rem;
  margin: 16px;
  color: #333;
  text-align: center;
}

.card__body {
  padding: 0 16px 16px;
  color: #666;
}

.card__body--status,
.card__body--specie,
.card__body--type,
.card__body--gender {
  margin: 8px 0;
  font-size: 1rem;
}

`;