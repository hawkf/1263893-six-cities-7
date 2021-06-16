import dayjs from "dayjs";

const MAX_RATING = 5;

export function transformRating(rating) {
  return (Math.round(rating)*100)/MAX_RATING;
}

export function sortByDate(commentA, commentB) {
  return dayjs(commentB.date).diff(commentA.date);
}

export function humanizeCommentDate(date) {
  return dayjs(date).format('MMMM YYYY');
}

