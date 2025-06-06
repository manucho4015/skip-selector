export interface Skip {
    id: number
    size: number
    hire_period_days: number
    transport_cost: null | number
    per_tonne_cost: null | number
    price_before_vat: number
    vat: number
    postcode: string
    area: string
    forbidden: false
    created_at: string
    updated_at: string
    allowed_on_road: true
    allows_heavy_waste: true
}