/**
 * `enum` represent all string/number possibilities. enum props can be accessed like object values via dot-notation. They cannot be edited externally (via network request, etc.) They need to be defined at code time.
 */
export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
