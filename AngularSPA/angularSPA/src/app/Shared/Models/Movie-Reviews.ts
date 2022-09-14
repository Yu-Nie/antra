export interface MovieReviews {
    userId:       number;
    movieReviews: MovieReview[];
}

export interface MovieReview {
    userId:     number;
    movieId:    number;
    reviewText: string;
    rating:     number;
    title:      string;
}