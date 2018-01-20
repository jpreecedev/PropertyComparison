export const ProspectActions = {
  TRACK_PROSPECT: 'TRACK_PROSPECT'
}

export const trackProspectAction = payload => {
  return {
    type: ProspectActions.TRACK_PROSPECT,
    payload
  }
}
