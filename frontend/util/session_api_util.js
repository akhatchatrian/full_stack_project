export const APIUtil = {

  login: user => (
      $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
      })
  ),

  signup: user => (
      $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
      })
  ),
    
  logout: () => (
      $.ajax({
        method: 'DELETE',
        url: '/api/session'
      })
  ),

  update: user => (
    $.ajax({
      method: 'PATCH',
      url: `/api/users/${user.id}`,
      data: { user }
    })
  )

}