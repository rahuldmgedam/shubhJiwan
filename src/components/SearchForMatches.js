import React from 'react'

const SearchForMatches = () => {
  return (
    <section
    id="search"
    className="py-8 bg-gray-100 text-gray-800 text-center mt-10 mb-10"
  >
    <div className="max-w-7xl mx-auto px-4">
      <h3 className="text-2xl font-bold mb-4 text-[#6B46C1]">Search for Matches</h3>
      
      <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
{/* Gender Dropdown */}
<select
className="p-3 border rounded-md focus:outline-none bg-white"
defaultValue=""
>
<option value="" disabled>
Select Gender
</option>
<option value="male">Male</option>
<option value="female">Female</option>
<option value="any">Any</option>
</select>

{/* Age Input */}
<input
type="text"
placeholder="Age"
className="p-3 border rounded-md focus:outline-none"
/>

{/* Religion Input */}
<select
className="p-3 border rounded-md focus:outline-none bg-white"
defaultValue=""
>
<option value="" disabled>
Religion
</option>
<option value="any">Any</option>
<option value="Hinduism">Hinduism</option>
<option value="Judaism">Judaism</option>
</select>

<select
className="p-3 border rounded-md focus:outline-none bg-white"
defaultValue=""
>
<option value="" disabled>
Select Mother Tongue
</option>
<option value="any">Any</option>
<option value="hindi">Hindi</option>
<option value="marathi">Marathi</option>
</select>
{/* Submit Button */}
<button
type="submit"
className="col-span-1 md:col-span-4 bg-gray-300 text-white px-6 py-3 rounded hover:bg-red-600"
>
Search
</button>
</form>

    </div>
  </section>
  )
}

export default SearchForMatches