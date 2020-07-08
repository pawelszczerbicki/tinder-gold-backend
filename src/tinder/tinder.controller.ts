import {Request, Response, Router} from 'express';
import axios from 'axios'

const tinderApiURL = 'https://api.gotinder.com/v2/fast-match/teasers'

export class TinderController {
    public path = '/tinder';
    public router = Router();

    constructor() {
        this.router.post(this.path, this.getLast);
    }

    getLast = async (req: Request, res: Response) =>
        axios.get(tinderApiURL, this.xAuthHeader(req.body.token))
            .then(users => res.json(users.data.data.results))
            .catch(() => res.status(500).json({error: 'Error fetching'}))

    private xAuthHeader = (token: string) => ({headers: {'X-Auth-Token': token}})
}
