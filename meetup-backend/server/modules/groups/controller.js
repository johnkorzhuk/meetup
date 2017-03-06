import Group from './model'

export const createGroup = async (req, res) => {
  const {
    name,
    description,
    category
  } = req.body

  if (!name) return res.status(400).json({ error: true, message: 'name is required' })
  else if (typeof name !== 'string') return res.status(400).json({ error: true, message: 'name must be a string' })
  else if (name.length < 5) return res.status(400).json({ error: true, message: 'name must be at least 5 characters long' })

  if (!description) return res.status(400).json({ error: true, message: 'description is required' })
  else if (typeof description !== 'string') return res.status(400).json({ error: true, message: 'description must be a string' })
  else if (description.length < 10) return res.status(400).json({ error: true, message: 'description must be at least 10 characters long' })

  const newGroup = new Group({ name, description })

  try {
    return res.status(200).json({ error: false, group: await newGroup.save() })
  } catch (error) {
    return res.status(400).json({ error: true, message: 'error creating group' })
  }
}
