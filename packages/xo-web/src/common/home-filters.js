const common = {
  homeFilterNone: '',
}

export const VM = {
  ...common,
  homeFilterPendingVms: 'current_operations:"" ',
  homeFilterHvmGuests: 'virtualizationMode:hvm ',
  homeFilterTags: 'tags:',
}

export const host = {
  ...common,
  homeFilterTags: 'tags:',
}

export const pool = {
  ...common,
  homeFilterTags: 'tags:',
}

export const vmTemplate = {
  ...common,
  homeFilterTags: 'tags:',
}

export const SR = {
  ...common,
  homeFilterTags: 'tags:',
}
